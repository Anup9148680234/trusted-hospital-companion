import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const {
      familyName,
      phone,
      whatsapp,
      patientName,
      hospital,
      serviceDate,
      serviceTime,
      serviceType,
      assistanceDetails,
    } = req.body || {};

    if (
      !familyName ||
      !phone ||
      !patientName ||
      !hospital ||
      !serviceDate ||
      !serviceTime ||
      !serviceType
    ) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    const result = await sql`
      INSERT INTO inquiries (
        family_name,
        phone,
        whatsapp,
        patient_name,
        hospital,
        service_date,
        service_time,
        service_type,
        assistance_details
      )
      VALUES (
        ${familyName.trim()},
        ${phone.trim()},
        ${whatsapp?.trim() || null},
        ${patientName.trim()},
        ${hospital.trim()},
        ${serviceDate},
        ${serviceTime},
        ${serviceType.trim()},
        ${assistanceDetails?.trim() || null}
      )
      RETURNING id, created_at;
    `;

    return res.status(201).json({
      success: true,
      inquiryId: result[0].id,
      createdAt: result[0].created_at,
    });
  } catch (error) {
    console.error("Inquiry creation failed:", error);

    return res.status(500).json({
      message: "Unable to submit your inquiry right now.",
    });
  }
}
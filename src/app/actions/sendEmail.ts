"use server";

import { Resend } from "resend";

export async function sendEmailAction(data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  inquiryType: string;
  message: string;
  attachments?: { filename: string; content: string }[];
}) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, subject, inquiryType, message, attachments } = data;

    // Σημείωση: Επειδή προς το παρόν δεν έχεις κάνει Verify κάποιο domain (π.χ. chemistryportal.gr),
    // το Resend απαιτεί το 'from' να είναι 'onboarding@resend.dev' 
    // και το 'to' να είναι ΑΥΣΤΗΡΑ το email με το οποίο έκανες εγγραφή στο Resend.
    // Άλλαξε το "TO_DIKO_SOU_EMAIL@gmail.com" με το πραγματικό σου email.

    const { data: emailData, error } = await resend.emails.send({
      from: "info@ximeiastintaxi.gr",
      to: "ximeiastintaxi@gmail.com", // <-- Το νέο email που θα δέχεται τα μηνύματα της φόρμας
      subject: `Νέο Μήνυμα: ${subject} (${inquiryType})`,
      html: `
        <h2>Νέο μήνυμα από την φόρμα επικοινωνίας</h2>
        <p><strong>Όνομα:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email αποστολέα:</strong> ${email}</p>
        <p><strong>Κατηγορία:</strong> ${inquiryType}</p>
        <hr />
        <p><strong>Μήνυμα:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      attachments: attachments && attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: String(error.message || "Unknown Resend error") };
    }

    return { success: true, id: emailData ? emailData.id : null };
  } catch (error: any) {
    console.error("Server Action Error:", error);
    return { success: false, error: String(error?.message || "Internal server error") };
  }
}

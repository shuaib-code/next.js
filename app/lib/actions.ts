"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// Invoices path
const invoicesPath: string = "/dashboard/invoices";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const { amount, status, customerId } = CreateInvoice.parse(rawFormData);

  const amountInCent = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCent}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  revalidatePath(invoicesPath);
  redirect(invoicesPath);
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, status, amount } = UpdateInvoice.parse(
    Object.fromEntries(formData.entries())
  );

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Invoice.",
    };
  }

  revalidatePath(invoicesPath);
  redirect(invoicesPath);
}
export async function deleteInvoice(id: string) {
  // throw new Error("Failed to Delete Invoice");    // for testing error.tsx

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath(invoicesPath);
    return { message: "Deleted Invoice." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice.",
    };
  }
}

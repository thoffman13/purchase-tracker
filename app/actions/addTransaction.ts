'use server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface TransactionData {
  text: string;
  quantity: number;
  price: number;
  volume: number;
  measurementUnit: string;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const quantityValue = formData.get('quantity');
  const priceValue = formData.get('price');
  const volumeValue = formData.get('volume');
  const measurementUnitValue = formData.get('measurementUnit');

  // Check for input values
  if (!textValue || textValue === '' || !quantityValue || !priceValue || !volumeValue || !measurementUnitValue) {
    return { error: 'Required field is missing' };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const quantity: number = parseInt(quantityValue.toString()); //Parse quantity as integer
  const price: number = parseFloat(priceValue.toString()); // Parse price as float
  const volume: number = parseFloat(volumeValue.toString()); // Parse volume as float
  const measurementUnit: string = measurementUnitValue.toString(); 

  // Get logged in user
  const { userId } = auth();

  // Check for user
  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        quantity,
        price,
        volume,
        measurementUnit,
        userId,
      },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    return { error: 'Purchase not added' };
  }
}

export default addTransaction;
"use server";

export default async function getData<T>(url: string): Promise<T | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching data: ${response.status} - ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
  }
}

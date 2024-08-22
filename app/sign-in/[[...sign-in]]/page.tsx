import { SignIn } from '@clerk/nextjs'
import Link from 'next/link';

export default function Page() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn />
      <div className="text-sm mt-2 flex">
        <Link href="/forgot-password" className="text-blue-400 ml-2">
          Forgot Password
        </Link>
      </div>
    </div>
  );
}
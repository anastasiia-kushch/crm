import Link from 'next/link';
import Button from './components/button';

export default function Home() {
  return (
    <main className="px-10 py-6 flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 mt-[140px] text-center">
        Home page
      </h1>
      <div className="text-xl mb-14 mx-auto">
        <p className="mb-5">
          Welcome to <span className="font-extrabold">CRM for Vendors</span> –
          your ultimate tool for managing vendor information efficiently. <br />
          This comprehensive CRM-like web application offers the following
          features:
        </p>
        <ul className="flex flex-col gap-2.5 list-disc list-inside">
          <li>
            <span className="font-semibold">Efficient vendor management:</span>{' '}
            easily add, edit, and delete vendor data.
          </li>
          <li>
            <span className="font-semibold">
              Organized contact information:
            </span>{' '}
            store and manage all supplier contacts in one place.
          </li>
          <li>
            <span className="font-semibold">Insightful reports:</span> generate
            detailed reports to analyze vendor performance.
          </li>
          <li>
            <span className="font-semibold">User-friendly interface:</span>{' '}
            navigate seamlessly through our intuitive design for an optimal user
            experience.
          </li>
        </ul>
        <p className="mt-5">
          Streamline your workflow and enhance your business interactions with
          our innovative solution.
        </p>
      </div>
      <div className="flex items-center gap-4 mx-auto">
        <Link href="/companies">
          <Button>Companies</Button>
        </Link>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}

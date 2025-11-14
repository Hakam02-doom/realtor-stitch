import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-background-dark/50 border-t border-gray-200/80 dark:border-gray-700/50 mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5e818d] dark:text-gray-400">© 2024 Realtor Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium text-primary" href="/privacy">
              Privacy Policy
            </Link>
            <a className="text-sm font-medium hover:text-primary transition-colors text-[#101618] dark:text-white" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


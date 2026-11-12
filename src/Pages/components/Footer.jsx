import { Github, Linkedin } from 'lucide-react';

// Add the LinkedIn profile URL here and the icon appears
const LINKEDIN_URL = '';

const iconLink =
  'text-fg-3 transition-colors duration-150 hover:text-fg';

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <p className="text-sm text-fg-3">© Abdul Rafay</p>
        <div className="flex gap-4">
          <a href="https://github.com/AbdulRafay345" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <Github size={18} strokeWidth={1.5} />
          </a>
          {LINKEDIN_URL && (
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

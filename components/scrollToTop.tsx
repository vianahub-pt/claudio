export default function ScrollToTop() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Scroll to top on page load
          window.addEventListener('load', function() {
            window.scrollTo(0, 0);
          });
          
          // Scroll to top on navigation
          document.addEventListener('DOMContentLoaded', function() {
            // Get all navigation links
            const links = document.querySelectorAll('a[href^="/"], a[href^="#"]');
            
            links.forEach(function(link) {
              link.addEventListener('click', function(e) {
                // Only for internal links that navigate to different pages
                const href = this.getAttribute('href');
                if (href && href.startsWith('/') && href !== window.location.pathname) {
                  // Small delay to ensure navigation happens first
                  setTimeout(function() {
                    window.scrollTo(0, 0);
                  }, 10);
                }
              });
            });
            
            // Handle browser back/forward buttons
            window.addEventListener('popstate', function() {
              setTimeout(function() {
                window.scrollTo(0, 0);
              }, 10);
            });
          });
        `,
      }}
    />
  )
}

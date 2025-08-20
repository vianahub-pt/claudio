const Breadcrumb = () => {
  return (
    <>
      <nav
        className="bg-gray-50 border-b border-gray-200 hidden"
        id="breadcrumb-nav"
        role="navigation"
        aria-label="Navegação estrutural"
      >
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm" role="list" id="breadcrumb-list">
            {/* Breadcrumb será populado via JavaScript */}
          </ol>
        </div>
      </nav>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const routeNames = {
                "/": "Início",
                "/about": "Quem Somos", 
                "/services": "Serviços",
                "/projects": "Projetos",
                "/contact": "Contacto"
              };
              
              const pathname = window.location.pathname;
              const breadcrumbNav = document.getElementById('breadcrumb-nav');
              const breadcrumbList = document.getElementById('breadcrumb-list');
              
              if (pathname === "/") {
                breadcrumbNav.style.display = 'none';
                return;
              }
              
              breadcrumbNav.classList.remove('hidden');
              
              const pathSegments = pathname.split("/").filter(segment => segment !== "");
              const breadcrumbItems = [
                { name: "Início", href: "/" },
                ...pathSegments.map((segment, index) => {
                  const href = "/" + pathSegments.slice(0, index + 1).join("/");
                  const name = routeNames[href] || segment.charAt(0).toUpperCase() + segment.slice(1);
                  return { name, href };
                })
              ];
              
              breadcrumbList.innerHTML = breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                const homeIcon = index === 0 ? '<svg width="16" height="16" fill="currentColor" class="mr-1 text-gray-500" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' : '';
                
                if (isLast) {
                  return \`<li class="flex items-center" role="listitem">
                    \${homeIcon}
                    <span class="text-gray-700 font-medium" aria-current="page">\${item.name}</span>
                  </li>\`;
                } else {
                  return \`<li class="flex items-center" role="listitem">
                    \${homeIcon}
                    <a href="\${item.href}" class="text-blue-600 hover:text-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-1">\${item.name}</a>
                    <svg width="16" height="16" fill="currentColor" class="mx-2 text-gray-400" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                  </li>\`;
                }
              }).join('');
            });
          `,
        }}
      />
    </>
  )
}

export default Breadcrumb

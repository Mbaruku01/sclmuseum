document.addEventListener('DOMContentLoaded', () => {
    // List of element IDs in the exact order they should appear
    const sections = [
        'headerSection', 
        'facultyGrid', 
        'statsGrid', 
        'p2025', 
        'p2026', 
        'reportsTable'
    ];

    sections.forEach((id, index) => {
        setTimeout(() => {
            const el = document.getElementById(id);
            if(el) {
                // Apply entrance to the section itself
                el.classList.add('animate-in');
                
                // If the section has multiple children (like cards), stagger them
                const children = el.children;
                if (children.length > 0) {
                    Array.from(children).forEach((child, i) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, i * 100);
                    });
                }
            }
        }, index * 200);
    });
});
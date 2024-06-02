// Add header for secondary pages.
function header (levels) {
    const home_link = levels + "index.html";
    const career_link = levels + "career.html";
    const edu_link = levels + "education.html";
    const proj_link = levels + "projects/index.html";
    const about_link = levels + "aboutme.html";   

    // Home
    const a_home = document.createElement("a");
    a_home.setAttribute("class", "txtcolor1");
    a_home.setAttribute("href", home_link);
    a_home.textContent = ("Home");
    const h2_home = document.createElement("h2");
    h2_home.setAttribute("class", "nav");
    h2_home.appendChild(a_home);

    // Career
    const a_career = document.createElement("a");
    a_career.setAttribute("class", "txtcolor1");
    a_career.setAttribute("href", career_link);
    a_career.textContent = ("Career");
    const h2_career = document.createElement("h2");
    h2_career.setAttribute("class", "nav");
    h2_career.appendChild(a_career);

    // Education
    const a_edu = document.createElement("a");
    a_edu.setAttribute("class", "txtcolor1");
    a_edu.setAttribute("href", edu_link);
    a_edu.textContent = ("Education");
    const h2_edu = document.createElement("h2");
    h2_edu.setAttribute("class", "nav");
    h2_edu.appendChild(a_edu);

    // Projects
    const a_proj = document.createElement("a");
    a_proj.setAttribute("class", "txtcolor1");
    a_proj.setAttribute("href", proj_link);
    a_proj.textContent = ("Projects");
    const h2_proj = document.createElement("h2");
    h2_proj.setAttribute("class", "nav");
    h2_proj.appendChild(a_proj);

    // About Me
    const a_about = document.createElement("a");
    a_about.setAttribute("class", "txtcolor1");
    a_about.setAttribute("href", about_link);
    a_about.textContent = ("About Me");
    const h2_about = document.createElement("h2");
    h2_about.setAttribute("class", "nav");
    h2_about.appendChild(a_about);

    // Top
    const a_top = document.createElement("a");
    a_top.setAttribute("class", "txtcolor1");
    a_top.setAttribute("href", "#top");
    a_top.textContent = ("↑");
    const h2_top = document.createElement("h2");
    h2_top.setAttribute("class", "nav");
    h2_top.appendChild(a_top);

    // Target and Container
    const header = document.getElementById("header");
    const nav = document.createElement("nav");
    nav.appendChild(h2_home);
    nav.appendChild(h2_career);
    nav.appendChild(h2_edu);
    nav.appendChild(h2_proj);
    nav.appendChild(h2_about);
    nav.appendChild(h2_top)
    header.appendChild(nav);
}

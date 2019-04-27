/**
 * data
 */

var projects = [
    {
        img: 'img/egy-garage.png',
        title: 'EgyGarage',
        description: 'built the backend in form of restful APIs for car parts store.',
        link: 'https://www.egy-garage.com',
        link_content: 'egy-garage.com'
    },
    {
        img: 'img/mobileshop.png',
        title: 'Mobile Shop',
        description: 'One the biggest markets in Egypt for selling Mobiles, computers and other accessories. Built the REST backend that get thousands of visits.',
        link: 'https://mobileshop.com.eg/',
        link_content: 'mobileshop.com.eg'
    }
]

var experiences = [
    {
        company: "Bit68 (10/2018 - Now)",
        job_title: "Full Stack Developer",
        job_description: `
        Work as a Full Stack Web Developer using Django framework for
        developing different solutions for other companies. The role
        involves building APIs to be used by web and mobile applications.
        <br>
        <br>
        Work also include dealing with deployment starting from the setup
        of the different needed tools like MYSQL, Nginx, Django.
        `,
        company_image: "img/bit68_.png",
        company_url: "https://bit68.com/",
    },
    {
        company: "Renile (10/2018 - Now)",
        job_title: "Part Time Full Stack Developer",
        job_description: `
        Use Node.js to build back-end system Including APIs and MQTT broker for managing devices and 
        sensors for different applications.
        <br>
        <br>
        Build Angular web application for visualizing the data 
        and building admin panel for controlling users and devices.
        `,
        company_image: "img/renile.png",
        company_url: "https://bit68.com/",
    }
]

var skills = [
    {
        title: "MEAN Stack Web Development",
        image: "img/mean_logo.png",
        description: `
        I've been making websites as hobby for 7 years now. Before being hired under the web team at Pinger, 
        I worked as a freelance web developer.
        <br>
        I've primary worked with HTML/CSS, Javascript/Jquery, Python Django and MySQL.`
    },
    {
        title: "Full Stack Web Development",
        image: "img/full_stack.png",
        description: `
        I've been making websites as hobby for 7 years now. Before being hired under the web team at Pinger, 
        I worked as a freelance web developer.
        <br>
        I've primary worked with HTML/CSS, Javascript/Jquery, Python Django and MySQL.`
    }
]

var about = [
    {
        image: "img/me_logo.png",
        description: `I've been making websites as hobby for 7 years now. Before being hired under the web team at Pinger, I worked as a freelance web developer.

        I've primary worked with HTML/CSS, Javascript/Jquery, Python/Flask/Django, PHP, and MySQL.`
    }
]

var footer = {
    
}

/**
 * ************ script ************
 */

/**
 * projects
 */
var project_main_element = $("#project");
$("#project").remove();

projects.forEach(function (project) {
    var project_element = project_main_element.clone();
    project_element.find('img')[0].src = project.img;
    project_element.find('h3').text(project.title);
    project_element.find('a')[0].href = project.link;
    project_element.find('a').text(project.link_content);
    project_element.find('p').text(project.description);

    project_element.appendTo("#portfolio");
});


/**
 * experiences
 */
var experience_main_element = $("#experience_item");
$("#experience_item").remove();

experiences.forEach(function (experience) {
    var experience_element = experience_main_element.clone();
    experience_element.find('h3').html(experience.company);

    experience_element.find('img')[0].src = experience.company_image;
    experience_element.find('a')[0].href = experience.company_url;
    experience_element.find('h4').html(experience.job_title);
    experience_element.find('p').html(experience.job_description);

    experience_element.appendTo("#experience");
});

/**
 * skills
 */
var skills_main_element = $("#skills_item");
$("#skills_item").remove();

skills.forEach(function (skills) {
    var skills_element = skills_main_element.clone();
    skills_element.find('h3').html(skills.title);

    skills_element.find('img')[0].src = skills.image;
    skills_element.find('p').html(skills.description);

    skills_element.appendTo("#skills");
});

/** 
 * about
 */
var about_main_element = $("#about_item");
$("#about_item").remove();

about.forEach(function (about) {
    var about_element = about_main_element.clone();

    about_element.find('img')[0].src = about.image;
    about_element.find('p').html(about.description);

    about_element.appendTo("#about");
});
/**
 * data
 */

var projects = [
    {
        img: 'img/tradeline.png',
        title: 'Tradeline',
        description: `
        Market Store for selling Apple products.
        <br>
        <br>
        Contibuted by reshaping the backend system in form of restful APIs instead of template based website.
        `,
        link: 'https://tradelinestores.com',
        link_content: 'tradelinestores.com',
    },
    {
        img: 'img/mobileshop.png',
        title: 'Mobile Shop',
        description: `
        One the biggest markets in Egypt for selling Mobiles and its accessories with thousands of website visites monthly.
        <br>
        <br>
        Contibuted by building the backend system in form of restful APIs with Payment integration.
        `,
        link: 'https://mobileshop.com.eg/',
        link_content: 'mobileshop.com.eg',
    },
    {
        img: 'img/egy-garage.png',
        title: 'EgyGarage',
        description: `
        Market Store for selling Car parts.
        <br>
        <br>
        Contibuted by building the backend system in form of restful APIs.
        `,
        link: 'https://www.egy-garage.com',
        link_content: 'egy-garage.com',
    },
    {
        img: 'img/nodejs-jwt-authentication-express-bcryptjs-jsonwebtoken-mongoose.png',
        title: 'User Management System',
        description: `
        A simple project for managing users with JWT authenication in a node project using API end points.
        <br>
        <br>
        Users could login to their accounts, logout, edit their information and delete it.
        `,
        github: 'https://github.com/mtaweela/userManagment'
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
        company_url: "https://re-nile.com/",
    }
]

var skills = [
    {
        title: "MEAN Stack Web Development",
        image: "img/mean_logo.png",
        description: `
        I have been working with MEAN stack for nearly 6 months now for building IoT based backend system.
        <br>
        <br>
        I've primary worked with Node.js/Express, NGINX with deploying the system on IBM cloud instance.`
    },
    {
        title: "Full Stack Web Development",
        image: "img/full_stack.png",
        description: `
        I have been working with this stack since 10-2018 for different projects.
        <br>
        <br>
        I've primary worked with Python/Django/Django Rest Framework, Ubuntu, Apache,
        Nginx and MySQL with AWS cloud instances and tools.`
    }
]

var about = [
    {
        image: "img/me_logo.png",
        description: `I've been making websites for nearly a year now. Before shifting to programming, I have got a bachelor in material science.
        <br>
        <br>
        When I'm not programming, my free time is spent reading some stuff or watching animation(Otaku).
        <br>
        <br>
        I've primary worked with Python/Django, Javascript/Node.js, MongoDB and MySQL.`
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
    project_element.find('h3').html(project.title);
    project_element.find('.project-content a')[0].href = project.link;
    project_element.find('.project-content a').html(project.link_content);
    project_element.find('p').html(project.description);

    project_element.find(".website")[0].href = project.link;
    project_element.find(".github")[0].href = project.github;
    if (!project.link) {
        project_element.find('.project-content a').html('');
        project_element.find(".website").remove();
    }
    if (!project.github) project_element.find(".github").remove();

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
/**
 * data
 */

var projects = [
    {
        img: 'img/egy-garage.png',
        title: 'EgyGarage',
        description: 'car parts store.',
        link: 'https://www.egy-garage.com',
        link_content: 'egy-garage.com'
    },
    {
        img: 'img/egy-garage.png',
        title: 'project 2',
        description: 'project 2 description.',
        link: 'https://1egy-garage.com',
        link_content: '1egy-garage.com'
    },
    {
        img: 'img/egy-garage.png',
        title: 'project 3',
        description: 'project 3 description.',
        link: 'https://2egy-garage.com',
        link_content: '2egy-garage.com'
    }
]

var experiences = [
    {
        company: "Bit68 (10/2018 - Now)",
        job_title: "Full Stack Developer",
        job_description: "Full stack job include creating APIs for different application.",
        company_image: "img/bit68_.png",
        company_url: "https://bit68.com/",
    },
    {
        company: "Bit68 (10/2018 - Now)",
        job_title: "Full Stack Developer",
        job_description: "Full stack job include creating APIs for different application.",
        company_image: "img/bit68_.png",
        company_url: "https://bit68.com/",
    }
]

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
    experience_element.find('h3').text(experience.company);

    experience_element.find('img')[0].src = experience.company_image;
    experience_element.find('a')[0].href = experience.company_url;
    experience_element.find('h4').text(experience.job_title);
    experience_element.find('p').text(experience.job_description);

    experience_element.appendTo("#experience");
});
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

/**
 * script
 */

// project
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
<?php
header('Content-Type: application/json');
include 'connect.php';
include 'projectsRender.php';
$params = json_decode(file_get_contents('php://input'), true);
switch($params['view']){
    case 'home':
        home();
    break;
    case 'portfolio':
        portfolio();
    break;
    case 'contact':
        contact();
    break;
}


function home(){
    $view = array();
    $view['view'] = 'main';
    echo json_encode($view);
}
function portfolio(){
    $view = array();
    $projects = getProjects();
    $html = '<h1>Portfolio</h1>';
    $view['html'] = $html;
    $view['projects'] = $projects;
    $view['html'] =  paintPorfolioPage($view);
    $view['view'] = 'portfolio';
    echo json_encode($view);
}
function contact(){
    $view = array("HTML" => "<h1>CONTACT</h1>");
    echo json_encode($view);
}
?>
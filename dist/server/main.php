<?php
header('Content-Type: application/json');
include 'connect.php';
include 'projectsRender.php';
$params = json_decode(file_get_contents('php://input'), true);
if( ! empty($params['action']) && $params['action']  == 'mail'){
    sendMail($params['params']);

}

if( isset($params['view']) ){
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
}

function sendMail($params){
    $to = 'sonido244@gmail.com';
    $subject = 'Contact from your fabulous website';
    $header = 'From: '.$params['email'];
    $array = array();
    if ( mail($to, $subject, $params['message'], $header) ){
        $array['success'] = true;
    }else{
        $array['success'] = false;
    }
    echo json_encode($array);

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
    $view = array();
    $view['view'] = 'contact';
    echo json_encode($view);
}
?>
<?php

function paintPorfolioPage($infoObject){
    $html = '';
    $html = $html.'<div class="portfolio-container">';
    $iterationNumber = count( $infoObject['projects'] );
    while($iterationNumber % 4 != 0){
        $iterationNumber += 1;
    }
    for ($i=0; $i < $iterationNumber; $i++) {
        if( !empty( $infoObject['projects'][$i] ) ) {
            $project = $infoObject['projects'][$i];
            $html = $html.
            '<div class="project">'.
                '<div class="card visible">'.
                    '<div class="project-image" style="background-image: url(\''.$project['image_link'].'\');"></div>'.
                '</div>'.
                '<div class="card hidden">'.
                    '<h1 class="title">'.$project['title'].'</h1>'.
                    '<div class="links">'.
                        '<a href="'.$project['github_link'].'" class="link fab fa-github" target="_blank"></a>'.
                        '<a href="'.$project['web_link'].'" class="link fas fa-globe-americas" target="_blank"></a>'.
                    '</div>'.
                    '<div class="description">'.
                        '<p>'.$project['description'].'</p>'.
                    '</div>'.
                '</div>'.
            '</div>';
        }
        else
        {
            $html = $html.
            '<div class="project empty-project">'.
                '<div class="coming-soon-banner">Comming soon...</div>'.
            '</div>';
        }
    }
    $hmtl = $html.'</div>';
    return $hmtl;
}


?>
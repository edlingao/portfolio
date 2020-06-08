<?php
    function openCon(){
        $dbhost="localhost";
        $dbuser="root";
        $dbpass='';
        $db="projects";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
        return $conn;
    }
    function closeCon($conn){
        $conn->close();
    }
    function getProjects(){
        $conn = openCon();
        $query = "SELECT * FROM projects";
        $dataBaseInfo = $conn->query($query);;
        $data = array();
        while ($row = $dataBaseInfo->fetch_assoc()){
            $data[] = $row; 
        }
        return $data;
    }

?>
<?php
require_once('/home/www/sysadm/base.php');


$res = execRequest("select id, 
					social_account as pgsocial,
					social_album_id as albumid, 
					publication_date as publicationDate, 
					published_date as publishedAt,
					link, 
					text, 
					media_url as picURL, 
					created, 
					approved, 
					'action'
					from socialweb.sys_socialwebsite order by id desc limit 40");

$promotions = array();
while($record=nextRecord($res)){
	$promotions[] = (object)$record;
}

echo json_encode($promotions);

// echo json_encode(
	// array(
		// array(
			// "id"=>"1000", 
			// "pgsocial"=>"Ville de Lausanne", 
			// "albumid"=>"45698", 
			// "publicationDate"=>"24.04.2018 11:33",
			// "publishedAt"=>"24.04.2018 11:45",
			// "link"=>"http://livecomedy.ch",
			// "text"=>"Site personnnel",
			// "picURL"=>"",
			// "created"=>"23.04.2018",
			// "approved"=>"oui",
			// "action"=>""
		// ),
		// array(
			// "id"=>"1002", 
			// "pgsocial"=>"Ville de Fribourg", 
			// "albumid"=>"98756", 
			// "publicationDate"=>"13.04.2015 10:12",
			// "publishedAt"=>"24.04.2018 11:45",
			// "link"=>"http://faibomeyer.ch",
			// "text"=>"Site personnnel",
			// "picURL"=>"",
			// "created"=>"13.06.2018",
			// "approved"=>"non",
			// "action"=>""
		// )
	// )
// );
?>
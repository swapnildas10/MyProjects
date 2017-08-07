<?php
//Check whether the form has been submitted

   //Converts the new line characters (\n) in the text area into HTML line breaks (the <br /> tag)
    
   if(isset($_POST['submit'])){
       $to = "swapnilinfy11@gmail.com";
       $from = $_POST['email'];
       $name=$_POST['name'];
 
   $name {$_POST['message']};
        $message = $name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
   $headers = "From:" . $from;
    $subject = "Form submission";
    mail($to,$subject,$message,$headers);
   
   }
    
?>
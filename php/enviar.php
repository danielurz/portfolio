<?php


    
    
    // Checks if for has been submitted
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      function post_captcha($user_response) {
          $fields_string = '';
          $fields = array(
              'secret' => '6Lcb3BQkAAAAAI3vuEvDJvywDyzbTgQBQW-QKsqE',
              'response' => $user_response
              );
              foreach($fields as $key=>$value)
              $fields_string .= $key . '=' . $value . '&';
              $fields_string = rtrim($fields_string, '&');
              
              $ch = curl_init();
              curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
              curl_setopt($ch, CURLOPT_POST, count($fields));
              curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
              curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);
              
              $result = curl_exec($ch);
              curl_close($ch);
              
              return json_decode($result, true);
          }
          
          // Call the function post_captcha
          $res = post_captcha($_POST['g-recaptcha-response']);
          
          if (!$res['success']) {
              // What happens when the CAPTCHA wasn't checked
              echo '<script>
              alert("Completa el captcha para comprobar que no eres un bot");
              window.history.go(-1);
              </script>';
          } else {
            
            include ('conexion.php');
            include ('sendmail.php');
            
            echo '<script>
            alert("El mensaje fue enviado");
            window.location.href = "http://www.danielurzola.com/";
            </script>';
      }
  }  
  
  
  


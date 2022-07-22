<?php

function dataToProps($data)
{
    return htmlentities(json_encode($data, JSON_HEX_QUOT), ENT_QUOTES);
}

$value = 'server data';

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Abode</title>

    <!-- TW stuff -->
    <link href="/dist/output.css" rel="stylesheet">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">


</head>

<body class="font-sans antialiased">
    <!-- -->
    <p>This is rendered from the server - static</p>

    <!-- The text inside shows for a split second, so we probs want this empty -->
    <div data-component="Text" data-prop-server="<?php echo dataToProps($value); ?>" data-prop-normal="Normal text">
        This text wil be replaced by your react component
    </div>
    <!-- -->
    <p>This is to come from <?php echo $value; ?></p>


    <!-- A bundle for Text block/component only -->
    <script src="/blocks/Text/dist/bundle.js"></script>

    <!-- A bundle for the Header block/component only -->
    <!-- Add another bundle here of another component you want to load on the page, alas you can dyanamically do this... -->
</body>

</html>
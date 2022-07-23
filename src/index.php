<?php

function dataToProps($data)
{
    return htmlentities(json_encode($data, JSON_HEX_QUOT), ENT_QUOTES);
}

$value = 'server data';
$another = 'ree';


$more_complex = [
    'key' => [1, 2, 'three', [4, 5, 6, 7, 8]],
    1 => 'test'
];

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

    <!-- Dependencies -->
    <!-- This has to global because components share deps, and we dont want to load them more than once, it's a trade off -->
    <script src="/dist/manifest.js"></script>
    <script src="/dist/vendor.js"></script>

    <!-- JS Blocks -->
    <script src="/dist/Text.js" defer></script>
    <script src="/dist/Person.js" defer></script>
    <script src="/dist/Thing.js" defer></script>
</head>

<body class="font-sans antialiased">

    <p>This is rendered from the server - static</p>

    <div data-component="Text" data-prop-server="<?php echo dataToProps($value); ?>" data-prop-normal="Normal text">
        This text wil be replaced by your react component
    </div>

    <p>This is to come from <?php echo $value; ?></p>

    <div data-component="Text" data-prop-server="lol" data-prop-normal="<?php echo $another; ?>">
        This text wil be replaced by your react component
    </div>

    <div data-component="Person" data-prop-obj="<?php echo dataToProps(($more_complex)); ?>">
        This text wil be replaced by your react component
    </div>

    <div data-component="Thing"></div>

</body>

</html>
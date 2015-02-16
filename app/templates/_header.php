<?php
/**
 * The template for displaying the header.
 *
 * @package <%= themename %>
 * @since 0.0.1
 */
 ?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <title>
    <?php
    wp_title( '|', true, 'right' );
    bloginfo( 'name' ); ?>
  </title>
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta charset="<?php bloginfo( 'charset' ); ?>"/>
  <link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() . '/images/favicon.ico' ); ?>">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
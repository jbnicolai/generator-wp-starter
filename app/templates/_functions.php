<?php
/**
 * <%= themename %> functions and definitions
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * @package <%= themename %>
 * @since 0.0.1
 */

 // Useful global constants
	define( '<%= _.slugify(themename).toUpperCase() %>_VERSION', '0.0.1' );
	define( '<%= _.slugify(themename).toUpperCase() %>_PATH',    dirname( __FILE__ ) . '/' );

 /**
  * Set up theme defaults and register supported WordPress features.
  *
  * @uses load_theme_textdomain() For translation/localization support.
  *
  * @since 0.0.1
  */
 function <%= _.slugify(themename) %>_setup() {
	/**
	 * Makes <%= themename %> available for translation.
	 *
	 * Translations can be added to the /lang directory.
	 * If you're building a theme based on <%= themename %>, use a find and replace
	 * to change '<%= _.slugify(themename) %>' to the name of your theme in all template files.
	 */
	load_theme_textdomain( '<%= _.slugify(themename) %>', get_template_directory() . '/languages' );

	add_theme_support( 'post-thumbnails' );
 }
 add_action( 'after_setup_theme', '<%= _.slugify(themename) %>_setup' );

 /**
  * Enqueue scripts and styles for front-end.
  *
  * @since 0.0.1
  */
 function <%= _.slugify(themename) %>_scripts_styles() {

	$postfix = ( defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ) ? '' : '.min';

	wp_enqueue_script( '<%= _.slugify(themename) %>', get_template_directory_uri() . "/assets/js/theme{$postfix}.js", array( 'jquery' ), <%= _.slugify(themename).toUpperCase() %>_VERSION, true );

	wp_enqueue_style( '<%= _.slugify(themename) %>', get_template_directory_uri() . "/assets/css/style{$postfix}.css", array(), <%= _.slugify(themename).toUpperCase() %>_VERSION );

 }
 add_action( 'wp_enqueue_scripts', '<%= _.slugify(themename) %>_scripts_styles' );

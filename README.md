# jCarousel Image Gallery Carousel
This will allow you to output a carousel of images with the jCarousel plugin.


### Enqueue JS

```php
wp_enqueue_script( 'jcarousel', get_template_directory_uri() . '/vendor/jcarousel/jquery.jcarousel.min.js', array('jquery'), '2.0', true );

wp_enqueue_script( 'jcarousel-responsive', get_template_directory_uri() . '/vendor/jcarousel/jquery.jcarousel-responsive.js', array('jquery'), '2.0', true );
```

### Output Gallery

```php
listing_image_gallery::output_gallery( $image_gallery );
```


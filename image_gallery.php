<?php

/**
 * Class image_gallery
 *
 */
class image_gallery {

	public static function output_gallery( $image_gallery ) {

		if ( $image_gallery ) { ?>

			<div class="image-gallery-wrapper">

				<div class="row image-gallery-row">

					<div class="small-2 medium-1 columns">

						<div class="jcarousel-arrow-wrap">

							<a href="#" class="jcarousel-control-prev">
								<i class="fa fa-chevron-left"></i>
							</a>

						</div>

					</div>

					<div class="small-8 medium-10 columns">

						<div class="jcarousel-wrapper">

							<div class="jcarousel">

								<ul>

									<?php foreach ( $image_gallery as $image ) { ?>

										<li>

											<a rel="lightbox" href="<?php echo $image['sizes']['large']; ?>">

												<img src="<?php echo $image['sizes']['thumbnail']; ?>"/>

											</a>

										</li>

									<?php } ?>

								</ul>

							</div>


							<!-- pagination control -->
							<!--<p class="jcarousel-pagination"></p>-->

						</div>

					</div>

					<div class="small-2 medium-1 columns">

						<div class="jcarousel-arrow-wrap">

							<a href="#" class="jcarousel-control-next">
								<i class="fa fa-chevron-right"></i>
							</a>

						</div>

					</div>

				</div>

			</div>


		<?php }

	}
}
<script>
  export let heroImage;
  export let urlFor;

  function makeWideURL(sanityImage) {
    const wideURL = urlFor(sanityImage)
      .width(1600)
      .quality(100)
      .saturation(-100)
      .format("webp")
      .url();
    return wideURL;
  }
  function makePhoneURL(sanityImage) {
    const phoneURL = urlFor(sanityImage)
      .width(400)
      .quality(90)
      .saturation(-100)

      .format("webp")
      .url();
    return phoneURL;
  }
  function makeFallbackURL(sanityImage) {
    const fallbackURL = urlFor(sanityImage)
      .width(520)
      .quality(80)
      .saturation(-100)

      .format(".png")
      .url();
    return fallbackURL;
  }
</script>

<aside
  class="max-h-[75vh] overflow-hidden border-b-4 border-b-zinc-700 bg-zinc-900"
>
  <picture>
    <source
      media="(max-width: 520px)"
      srcset={`${makePhoneURL(heroImage[0].image)}`}
    />
    <source
      media="(min-width: 520px)"
      srcset={`${makeWideURL(heroImage[0].image)}`}
    />
    <img
      src={makeFallbackURL(heroImage[0].image)}
      alt="F3 event"
      sizes="(max-width: 520px) 520px, 1800px"
      class="w-full mt-20 sm:mt-28 2xl:-mt-20"
    />
  </picture>
</aside>

# Sup.js: Save URL Parameters
SUP (Save URL Parameters) is a script that lets you save URL parameters and values in a visitor's session, then insert them into any form the visitor submits during their session.

## Why

Adding parameters (or queries) to a URL can provide additional information about website visitors, such as:

* The marketing source of the visitor, using standard UTM tags (utm_medium, utm_campaign, utm_source, utm_content, and utm_term) or custom parameters.
* The search query they used on your site.
* The referral, affiliate, or promo linked they used to reach your site.

It is often helpful to capture that information any time a visitor submits a form on your website. For example, if a visitor completes a signup or contact form, you might want to know what marketing campaign can be attributed with that conversion. Some marketing platforms and form tools are able to capture URL parameters, but only if they are present on the page&mdash;if a visitor views more than one page then the URL parameters will not be saved. Unfortunately this means it works only if the visitor completes the form on the same page they landed on, without navigating away.

Some analytics tools can recognize and report on some or all URL parameters, but they don't show it side-by-side with form data. For example, Google Analytics only parses UTM parameters, and it does not allow you to save personal information from forms. In many cases you may want to see those values for every form completion.

There exist many similar scripts that capture UTM tags (utm_medium, etc) but not any custom parameters. They are not helpful if you want to track a custom parameter such as `referral`, `promo`, `ref`, `search`, and so on.

This script captures and saves *any* parameter in the URL, then inserts the value of that parameter into *any* form on your site that has a `name` and `ID` that matches the parameter key. You can make the form field hidden since it is filled in automatically and does not need any input from the visitor.

## How

1. Make sure jQuery is loaded on your site.
2. Add the following code to every page on your site where you want to capture URL parameters or insert them into forms. Just before the </body> tag would be a good place.
3. Add a form field and give it a `name` and `id` attribute that matches the URL parameter whose value you want to capture.

```

<script src="path-to-script/sup.min.js"></script>
<script>
queryForm();
</script>

```

(Where `path-to-script` is the location of the script.)

That's it!

If you want to reset (clear) saved paramater values after the visitor submits a form, you can add `{reset: true}` to the function like so:

```
<script>
queryForm({reset: true});
</script>
```

## Example

```
<html>
<body>
  <form action="#" enctype="text/plain">
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" required>
    <input type="hidden" name="utm_source" id="utm_source" value="">
    <input type="hidden" name="utm_medium" id="utm_medium" value="">
    <input type="hidden" name="utm_campaign" id="utm_campaign" value="">
    <input type="submit" value="Submit">
  </form>

  <script src="path-to-script/sup.min.js"></script>
  <script>
  queryForm();
  </script>
</body>
</html>
```
This form has only one field that is visible. However, if any of the visited URLs during the visitor's session had URL paramaters matching `utm_medium`, `utm_campaign`, or `utm_source`, the values of those parameters will be submitted with the form.

If the a visitor landed on https://www.example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer-promotion, navigated to other pages, then finally submitted this form with their email, you would also see the values `google`, `cpc`, and `summer-promotion` in the form submission.

## Contact
Twitter: [@grigoriy_kogan](https://twitter.com/grigoriy_kogan)
Web: [GKogan.co](http://www.gkogan.co)

## License
Licensed under the MIT and GPL licenses.

window.displayOwners = (function($, _, Handlebars) {
  const ownerContainer = $('#owners');
  const ownerSource = $('#ownerTemplate').html();
  const ownerTemplate = Handlebars.compile(ownerSource);

  return owners => {
    _.forEach(owners, owner => {
      const ownerCompiled = ownerTemplate(owner);
      ownerContainer.append(ownerCompiled);
    });
  };
})(jQuery, _, Handlebars);

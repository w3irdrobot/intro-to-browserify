window.displayOwners = (function(_) {
  const ownerContainer = $('#owners');
  const ownerSource = $('#ownerTemplate').html();
  const ownerTemplate = Handlebars.compile(ownerSource);

  return owners => {
    _.forEach(owners, owner => {
      const ownerCompiled = ownerTemplate(owner);
      ownerContainer.append(ownerCompiled);
    });
  };
})(_);

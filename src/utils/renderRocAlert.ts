const id = 'responsiveOneCognizantAlert';

const onDismiss = () => {
  document.getElementById(id)?.remove();
}

const renderRocAlert = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'Alert';
  wrapper.id = id;

  const wrapperContent = document.createElement('div');
  wrapperContent.className = 'Alert__Content';
  wrapperContent.innerHTML = '';
  wrapperContent.innerHTML += '<p class="Alert__Text Alert__Description">Enhanced by:</p>';
  wrapperContent.innerHTML += '<p class="Alert__Text Alert__Title">Responsive OneCognizant</p>';

  const wrapperBtns = document.createElement('div');
  wrapperBtns.className = 'Alert__Buttons';

  const dismissBtn = document.createElement('button');
  dismissBtn.className = 'Alert__Button';
  dismissBtn.innerHTML = 'x';
  dismissBtn.onclick = onDismiss;

  wrapperBtns.append(dismissBtn);
  wrapper.append(wrapperContent);
  wrapper.append(wrapperBtns);

  document.body.append(wrapper);
}

export default renderRocAlert;

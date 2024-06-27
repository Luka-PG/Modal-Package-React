# A React modal :

> Npm package to add a react Modal component

## Installation

Here is the link of the npm folder: https://www.npmjs.com/package/luka.pg-modal-package-react?activeTab=readme

Start with adding the package in your project :

```sh
npm i luka.pg-modal-package-react
```

## Usage

### Import and setup the package

Import the package:

```sh
import { Modal } from 'luka.pg-modal-package-react';
```

Add the state to control if the modal is visible or not.

```sh
const [show, setShow] = useState(false);
```

Then add the modal component to the page:

```sh
<Modal title='' onClose={ ()=> setShow(false) } show={ show } />
```

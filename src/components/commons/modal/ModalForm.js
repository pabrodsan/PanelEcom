import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const ModalForm = ({isOpen, toggle, updateData, data, handleInputChange, addData}) => {

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="CustomerName">Customer Name</Label>
            <Input invalid={true} type="customerName" name="customerName" id="customerName" value={data.customerName} onChange={handleInputChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input invalid={true} type="email" name="email" id="email" value={data.email} onChange={handleInputChange}/>
          </FormGroup>
          {/* <FormGroup >
            <Label for="Registered">Registered</Label>
            <Input invalid={true} type="registered" name="registered" id="registered" onChange={handleInputChange} />
          </FormGroup> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => addData(data)}>Ok</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;
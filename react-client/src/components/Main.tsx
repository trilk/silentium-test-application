import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { initState, nextState } from "../api/button-transition";
import ButtonState from "../interfaces/ButtonState";
import UserButton from "./UserButton";

const Main = () => {
  const [buttonsState, setButtonsState] = useState<ButtonState[]>([]);
  const [currentStep, setCurrentStep] = useState("blue");

  //Reset buttons state
  const resetState = async () => {
    initState().then((response) => {
      setButtonsState(response.data.state);
      setCurrentStep("blue");
    });
  };

  //Move to another step
  const moveStep = async (next: ButtonState) => {
    nextState(currentStep, next).then((response) => {
      if (response.data.success) {
        setButtonsState(response.data.state);
        setCurrentStep(next.id);
      }
    });
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
    <Row>
      <Col sm="12" md="8">
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <UserButton
              key="blue"
              id="blue"
              buttons={buttonsState}
              moveStep={moveStep}
            />
          </Col>
          <Col>
            <Row className="py-2" style={{ height: "12em" }}>
              <Col className="d-flex justify-content-center align-items-center">
                <UserButton
                  key="green"
                  id="green"
                  buttons={buttonsState}
                  moveStep={moveStep}
                />
              </Col>
            </Row>
            <Row className="py-2" style={{ height: "12em" }}>
              <Col className="d-flex justify-content-center align-items-center">
                <UserButton
                  key="yellow"
                  id="yellow"
                  buttons={buttonsState}
                  moveStep={moveStep}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md="4" className="d-flex justify-content-center align-items-center">
        <Button variant="outline-danger" size="lg" onClick={() => resetState()}>
          Reset
        </Button>
      </Col>
    </Row>
  );
};

export default Main;

import regexGenerator from "regex-nlp";
import React, {
  Component
} from 'react';
import Switch from "react-bootstrap-switch";
import {
  Button,
  FormGroup,
  Input,
  Container,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
  InputGroup,
  Label
} from "reactstrap";
import TextField from '@material-ui/core/TextField';
import Chip from "@material-ui/core/Chip";
import Alert from '@material-ui/lab/Alert';

export class GetStarted extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: null,
      testingKeywords: null,
      selectedOptionCase: null,
      selectedOptionGlobal: null,
      isNormalForm: true,
      isWordsForm: null,
      isDatesForm: null,
      selectedOptionIsWords: null,
      selectedOptionIsDates: null,
      selectedOptionIsTest: 'test',
      selectedOptionIsExec: null,
      selectedOptionIsMatch: null,
      selectedOptionIsReplace: null,
      selectedOptionIsSearch: null,
      isTestChecked: true,
      isExecChecked: null,
      isMatchChecked: null,
      isReplaceChecked: null,
      isSearchChecked: null,
      regexPattern: null,
      replaceWithThisKeyword: null,
      copySuccess: false,
      testResult: [{ keyword: null, result: 'false' }],
      editEquation: false,
      editedRegexEq: null,
      closeWarning: false,
      likesCount: null,
      liked: false,
      selectedRadioOption:null
    };
    this.handleTextInput = this.handleTextInput.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.handleTestingKeywords = this.handleTestingKeywords.bind(this);
  }

  handleTextInput = (event) => {
    console.log("🚀 ~ file: GetStarted.js ~ line 57 ~ GetStarted ~ event.target.value", event.target.value)
    this.setState({
      inputText: event.target.value
    });
  };

  handleTestingKeywords = (event) => {
    this.setState({
      testingKeywords: event.target.value
    });
  };

  handleReplaceKeyword = (event) => {
    this.setState({
      replaceWithThisKeyword: event.target.value
    });
  };

  handleCaseChange = (event) => {
    this.setState({
      selectedOptionCase: event.state.value
    });
  };

  // getRegexMethod = (event) => {
  //   this.setState({
  // methodDisplay: event.state.value
  //   });
  // };

  handleGlobalChange = (event) => {
    this.setState({
      selectedOptionGlobal: event.state.value
    });
  };

  handleChoosenNormal = (event) => {
    this.setState({ isWordsForm: false });
    this.setState({ isDatesForm: false });
    this.setState({ selectedOptionIsWords: false });
    this.setState({ selectedOptionIsDates: false });
    this.setState({ isNormalForm: event.target.checked });
  };

  handleChoosenWords = (event) => {
    // this.setState({
    //   isWordsForm: event.target.checked,
    //   selectedOptionIsWords: event.target.name,
    //   isNormalForm: false,
    //   isDatesForm: false,
    //   selectedOptionIsDates: false
    // });
    this.setState({ isWordsForm: event.target.checked });
    this.setState({ selectedOptionIsWords: event.target.name });
    this.setState({ isNormalForm: false });
    this.setState({ isDatesForm: false });
    this.setState({ selectedOptionIsDates: false });
  };

  handleChoosenDates = (event) => {
    this.setState({ isDatesForm: event.target.checked });
    this.setState({ selectedOptionIsDates: event.target.name });
    this.setState({ isWordsForm: false });
    this.setState({ isNormalForm: false });
    this.setState({ selectedOptionIsWords: false });
  };

  testChecked = (event) => {
    this.setState({ isTestChecked: event.target.checked });
    this.setState({ isExecChecked: false });
    this.setState({ isMatchChecked: false });
    this.setState({ isReplaceChecked: false });
    this.setState({ isSearchChecked: false });
    this.setState({ selectedOptionIsTest: event.target.name });
    this.setState({ selectedOptionIsExec: false });
    this.setState({ selectedOptionIsMatch: false });
    this.setState({ selectedOptionIsReplace: false });
    this.setState({ selectedOptionIsSearch: false });
  };

  execChecked = (event) => {
    this.setState({ isExecChecked: event.target.checked });
    this.setState({ isMatchChecked: false });
    this.setState({ isTestChecked: false });
    this.setState({ isReplaceChecked: false });
    this.setState({ isSearchChecked: false });
    this.setState({ selectedOptionIsExec: event.target.name });
    this.setState({ selectedOptionIsTest: false });
    this.setState({ selectedOptionIsMatch: false });
    this.setState({ selectedOptionIsReplace: false });
    this.setState({ selectedOptionIsSearch: false });
  };

  matchChecked = (event) => {
    this.setState({ isMatchChecked: event.target.checked });
    this.setState({ isTestChecked: false });
    this.setState({ isReplaceChecked: false });
    this.setState({ isSearchChecked: false });
    this.setState({ isExecChecked: false });
    this.setState({ selectedOptionIsMatch: event.target.name });
    this.setState({ selectedOptionIsTest: false });
    this.setState({ selectedOptionIsExec: false });
    this.setState({ selectedOptionIsReplace: false });
    this.setState({ selectedOptionIsSearch: false });
  };

  replaceChecked = (event) => {
    this.setState({ isReplaceChecked: event.target.checked });
    this.setState({ isTestChecked: false });
    this.setState({ isExecChecked: false });
    this.setState({ isMatchChecked: false });
    this.setState({ isSearchChecked: false });
    this.setState({ selectedOptionIsReplace: event.target.name });
    this.setState({ selectedOptionIsTest: false });
    this.setState({ selectedOptionIsExec: false });
    this.setState({ selectedOptionIsMatch: false });
    this.setState({ selectedOptionIsSearch: false });
  };

  searchChecked = (event) => {
    this.setState({ isSearchChecked: event.target.checked });
    this.setState({ isTestChecked: false });
    this.setState({ isExecChecked: false });
    this.setState({ isMatchChecked: false });
    this.setState({ isReplaceChecked: false });
    this.setState({ selectedOptionIsSearch: event.target.name });
    this.setState({ selectedOptionIsTest: false });
    this.setState({ selectedOptionIsExec: false });
    this.setState({ selectedOptionIsMatch: false });
    this.setState({ selectedOptionIsReplace: false });
  };

  handleInputKeys = (keywords) => {
    let inputKeys;
    let stringKeywords = JSON.stringify(keywords);

    if (/\\n/.test(stringKeywords)) {
      inputKeys = stringKeywords.replace(/\\n/g, 'uniKey!@').replace(/[\\"]/g, '').split('uniKey!@');
      inputKeys = inputKeys.filter(x => x);
    }
    else {
      console.log('entered in normal string case', stringKeywords);
      inputKeys = stringKeywords.replace(/[\\"]/g, '');
    }
    return inputKeys;
  };

  handleGetRegex = () => {
    let modifiedKeywords = this.handleInputKeys(this.state.inputText);
    console.log("🚀 ~ file: GetStarted.js ~ line 202 ~ GetStarted ~ handleGetRegex= ~ modifiedKeywords", modifiedKeywords)
    let caseSense = this.state.selectedOptionCase;
    let isGlobal = this.state.selectedOptionGlobal;
    let areWords = this.state.isNormalForm ? 'normal' : this.state.selectedOptionIsWords ? this.state.selectedOptionIsWords : this.state.selectedOptionIsDates;
    console.log("🚀 ~ file: GetStarted.js ~ line 210 ~ GetStarted ~ handleGetRegex= ~ areWords", areWords);
    let pattern = regexGenerator.getRegexExpression(modifiedKeywords, areWords, caseSense, isGlobal);
    this.setState({
      regexPattern: pattern
    });
  };

  testKeywords = async () => {
    try {
      let caseSense = /\/(gi|ig|i)$/.test(this.state.regexPattern) ? true : this.state.selectedOptionCase;
      let isGlobal = /\/(gi|ig|g)$/.test(this.state.regexPattern) ? true : this.state.selectedOptionGlobal;
      let method = null;
      let replaceString = '';
      let testResult = '';
      let err = 'regex or keywords are not available';
      console.log("🚀 ~ file: GetStarted.js ~ line 195 ~ GetStarted ~ testKeywords= ~ this.state.selectedOptionIsTest", this.state.selectedOptionIsTest)
      if (this.state.testingKeywords && this.state.regexPattern) {
        if (this.state.selectedOptionIsTest) {
          method = this.state.selectedOptionIsTest;
        }
        if (this.state.selectedOptionIsExec) {
          method = this.state.selectedOptionIsExec;
        }
        if (this.state.selectedOptionIsMatch) {
          method = this.state.selectedOptionIsMatch;
        }
        if (this.state.selectedOptionIsReplace) {
          method = this.state.selectedOptionIsReplace;
        }
        if (this.state.selectedOptionIsSearch) {
          method = this.state.selectedOptionIsSearch;
        }
        if (this.state.replaceWithThisKeyword) {
          replaceString = this.state.replaceWithThisKeyword;
        }
        let modifiedKeywords = await this.handleInputKeys(this.state.testingKeywords);
        testResult = await regexGenerator.validateRegexEquation(modifiedKeywords, this.state.regexPattern, method, replaceString, caseSense, isGlobal);
        await this.setState({
          testResult
        });
      } else {
        throw err;
      }
      console.log('finaleq--------------------------', this.state.testResult);
    } catch (err) {
      console.log('err in test keywords', err);
    }
  };

  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
    this.setState({ copySuccess: true });
  };

  editEquation = () => {
    this.setState({
      editEquation: true
    });
  };

  editRegexEquation = (event) => {
    this.setState({
      editedRegexEq: event.target.value
    });
    this.setState({
      regexPattern: event.target.value
    });
    console.log("🚀 ~ file: GetStarted.js ~ line 277 ~ GetStarted ~ editedRegexEq", this.state.editedRegexEq);

  };

  saveEditedEq = () => {
    let newEq = this.state.editedRegexEq;
    if(/\/\(?.*\)?\/i?g?/.test(newEq)){
    let lastIndex = newEq.lastIndexOf('/');
    let prvStr = newEq.substring(0, lastIndex + 1);
    let sub = newEq.substring(lastIndex + 1, newEq.length);
    let finalKey = '';
    if (sub.length <= 2) {
      let textCon = sub.match(/(ig|gi|i|g)$/ig);
      let filtered = textCon ? textCon[0] : '';
      finalKey = prvStr.concat(filtered);
    } else {
      finalKey = prvStr;
    }
    this.setState({
      regexPattern: finalKey
    });
  }
    console.log("🚀 ~ file: GetStarted.js ~ line 286 ~ GetStarted ~ regexPattern", this.state.regexPattern);
  };

  handleWarning = () => {
    this.setState({
      closeWarning: false
    });
  };

  // getLikesCount = async () => {
  //   axios.get(`https://regex-server.herokuapp.com/api/get`)
  //     .then(res => {
  //       console.log('fetched succesfully res from get', res);
  //       if (res && res.data) {
  //         const likesCount = res.data.length;
  //         this.setState({ likesCount });
  //       }

  //     });
  // };

  // postLiked = async () => {
  //   let like = 'true';
  //   let disLiked = '';
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   let res = await axios.post(`https://regex-server.herokuapp.com/api/add`, { like, disLiked }, config);
  //   console.log("🚀 ~ file: GetStarted.js ~ line 334 ~ GetStarted ~ postLiked= ~ res", res);
  //   if (res.status === 200) {
  //     const liked = "true";
  //     console.log("🚀 ~ file: GetStarted.js ~ line 334 ~ GetStarted ~ postLiked= ~ res", res, liked);
  //     this.setState({ liked });
  //   }
  // };

  onValueChange = async(event) =>{
    this.setState({
      selectedRadioOption: event.target.value
    });
  }

  render() {
    const { testResult, isTestChecked, isMatchChecked, isExecChecked, isReplaceChecked, isSearchChecked, isWordsForm, isDatesForm, isNormalForm } = this.state;

    return (
      <>
        <div
          className="section section-download"
          id="get-started"
        >
          <Container>
            { /*<Row style={{
              position: 'absolute', top: '240px',
              right: '28px'
            }}> */}
              { /* {this.state.closeWarning ?
                <Alert onClose={this.handleWarning} variant="filled" severity="error">
                  This is an error alert check it out! </Alert> : '' }*/}
                {/*</Row> */}
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
                <h3 className="title">Regex Pattern Generator</h3>
                <h5 className="description">
                  Give string/array of strings as input and get the regex patterns by applying valid options below
              </h5>
              </Col>
            </Row>
            <br></br>
            <Row style={{ alignItems: 'center' }}>
              <Col lg="11" sm="6">
                <TextField
                  style={{ width: '1000px', borderRadius: '30px' }}
                  id="outlined-textarea"
                  label="Please enter the keywords to create the regex pattern *"
                  placeholder="Type Here..."
                  multiline
                  rows={8}
                  variant="outlined"
                  onChange={this.handleTextInput}
                />
              </Col>
              <Col lg="1" sm="2">
                <Button onClick={this.handleGetRegex} disabled={this.state.inputText && this.state.inputText.length ? false : true} className="btn-round" type="button" style={{ margin: 0, width: '80px', backgroundColor: this.state.inputText && this.state.inputText.length ? '#2ca8ff' : '#808080' }}>
                  Get
                </Button>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row id="checkRadios">
              <Col lg="2" sm="6">
                <p className="category">Case insensitive </p>
                <Switch defaultValue={false} onChange={this.handleCaseChange} offColor="" onColor="blue"></Switch>
              </Col>
              <Col lg="3" sm="6">
                <p className="category">Global</p>
                <Switch defaultValue={false} onChange={this.handleGlobalChange} offColor="" onColor="blue"></Switch>
              </Col>
             {/* <Col>
              <form>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="Normal"
                    checked={this.state.selectedRadioOption === "Normal"}
                    onChange={this.onValueChange}
                  />
                  Normal
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="Words"
                    checked={this.state.selectedRadioOption === "Words"}
                    onChange={this.onValueChange}
                  />
                  Words
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="Dates"
                    checked={this.state.selectedRadioOption === "Dates"}
                    onChange={this.onValueChange}
                  />
                  Dates
                </label>
              </div>
              <div>
                Selected option is : {this.state.selectedRadioOption}
              </div>
              </form>
              </Col>
             */}
              <Col className="mb-4" lg="3" sm="6">
                <p className="category">Pattern Type</p>
                <FormGroup check>
                  <Label check>
                    <Input checked={isNormalForm} onChange={this.handleChoosenNormal} name="normal" type="checkbox"></Input>
                    <span className="form-check-sign"></span>
                Normal
              </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input checked={isWordsForm} onChange={this.handleChoosenWords} name="words" type="checkbox"></Input>
                    <span className="form-check-sign"></span>
                  Words
                </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input checked={isDatesForm} onChange={this.handleChoosenDates} name="dates" type="checkbox"></Input>
                    <span className="form-check-sign"></span>
                  Dates
                </Label>
                </FormGroup>
              </Col>
            </Row>
            <Row className="text-center mt-5">
              <Col className="ml-auto mr-auto" md="12">
                <h2>{this.state.regexPattern}</h2>
              </Col>
            </Row>
            <Row style={{
              position: 'absolute', top: '220px',
              paddingTop: '20px',
              right: '20px'
            }}>
              {/Choose valid options and input/.test(this.state.regexPattern) ?
                <Alert onClose={this.handleWarning} variant="filled" severity="warning">
                  Choose valid options and input! </Alert> : ''}
              {!/Choose valid options and input/.test(this.state.regexPattern) && this.state.regexPattern ?
                <Alert onClose={this.handleWarning} variant="filled" severity="success">
                  Gotcha!!! successfully got output </Alert> : ''}
            </Row>
            </Container>
        </div>
            <div
          className="section section-download"
          id="get-validate"
        >
          <Container>
            <br></br>
            <br></br>
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
                <h3 className="title">Regex validator</h3>
                <h5 className="description">
                  Give regular expression with string/array of strings and get the validated results.
            </h5>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row style={{ alignItems: 'center' }}>
                {/*<Col lg="1" sm="12">
                  <button onClick={() => this.editEquation()}>
                    Edit
              </button>
              </Col>*/}
                {/*<Col lg="10" sm="12">
                  {this.state.editEquation && this.state.regexPattern ?
                    <InputGroup >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-angle-right"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Edit Regex equation..."
                        defaultValue={this.state.regexPattern}
                        type="text"
                        onChange={this.editRegexEquation}
                      ></Input>
                    </InputGroup>
                    : ''}
                  </Col> */}
                {/*<i class="far fa-edit"></i>*/}
                  <Col lg="11" sm="6">
                    <TextField
                      style={{ width: '1000px' }}
                      id="outlined-textarea"
                      placeholder="Edit Regex equation..."
                      value={this.state.regexPattern}
                      variant="outlined"
                      onChange={this.editRegexEquation}
                    /> 
                  </Col>
                <Col lg="1" sm="2">
                  <Button onClick={this.saveEditedEq} className="btn-round" type="button" disabled={this.state.editedRegexEq && this.state.editedRegexEq.length && /\/\(?.*\)?\/i?g?/.test(this.state.editedRegexEq) ? false : true} style={{ margin: 0, backgroundColor: this.state.editedRegexEq && this.state.editedRegexEq.length && /\/\(?.*\)?\/i?g?/.test(this.state.editedRegexEq) ? '#2ca8ff' : '#808080' }}>
                    Edit/Apply
              </Button>
                </Col>
              </Row>
              <br></br>
            <Row>
              <Col className="mb-4" lg="12" sm="6">
                <p className="category">Choose Methods</p>
                <FormGroup check className="form-check-radio">
                  <Row>
                    <Col lg="2">
                      <Label check>
                        <Input
                          checked={isTestChecked}
                          onChange={this.testChecked}
                          defaultValue="test"
                          id="test"
                          name="test"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                  Test
                </Label>
                    </Col>
                    <Col lg="2">
                      <Label check>
                        <Input
                          checked={isExecChecked}
                          onChange={this.execChecked}
                          defaultValue="exec"
                          id="Execute"
                          name="exec"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                  Execute
                </Label>
                    </Col>
                    <Col lg="2">
                      <Label check>
                        <Input
                          checked={isMatchChecked}
                          onChange={this.matchChecked}
                          defaultValue="match"
                          id="match"
                          name="match"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                  Match
                </Label>
                    </Col>
                    <Col lg="2">
                      <Label check>
                        <Input
                          checked={isReplaceChecked}
                          onChange={this.replaceChecked}
                          defaultValue="replace"
                          id="replace"
                          name="replace"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                  Replace
                </Label>
                    </Col>
                    <Col lg="2">
                      <Label check>
                        <Input
                          checked={isSearchChecked}
                          onChange={this.searchChecked}
                          defaultValue="search"
                          id="search"
                          name="search"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                  Search
                </Label>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {isReplaceChecked ? <Col lg="11" sm="6">
                <InputGroup >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-angle-right"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Replace string with..."
                    type="text"
                    onChange={this.handleReplaceKeyword}
                  ></Input>
                </InputGroup>
              </Col> : ''}
              {/* <Col lg="2" sm="6">
                <p className="category">Need Equation</p>
                <Switch defaultValue={false} onChange={this.getRegexMethod} offColor="" onColor="red"></Switch>
          </Col>*/}
              {/* <Row style={{ paddingLeft: '20px' }}>
                <Col lg="7" sm="12">
                  <textarea rows='1' cols="30"
                    ref={(textarea) => this.textArea = textarea}
                    value={this.state.isTestChecked && this.state.regexPattern && !/Choose valid options and input/.test(this.state.regexPattern) ? this.state.regexPattern + `.test("Input String")` : this.state.isExecChecked ? this.state.regexPattern + `.exec('Input String')` : this.state.isMatchChecked ? `'Input String'.match(` + this.state.regexPattern + `)` : this.state.isReplaceChecked ? `'Input String'.replace(` + this.state.regexPattern + `)` : this.state.isSearchChecked ? `'Input String'.search(` + this.state.regexPattern + `)` : ''}
                  />
                </Col>
                <Col lg="4" sm="12">
                  <button disabled={this.state.regexPattern && this.state.regexPattern.length && !/Choose valid options and input/.test(this.state.regexPattern) ? false : true} onClick={() => this.copyCodeToClipboard()}>
                    Copy Equation
          </button>
                </Col>
                <Col lg="1" sm="12">
                  {
                    this.state.copySuccess ?
                      <div style={{ color: "green" }}>
                        Success!
                </div> : null
                  }
                </Col>
                </Row> */}
              <br></br>
              {
                /* {methodDisplay ?
                 <div>
                   {this.state.isTestChecked ? <div><h3 style={{ color: 'grey' }}>{this.state.regexPattern}.test('Input String')</h3></div> : ''}
                   {this.state.isExecChecked ? <div><h3 style={{ color: 'grey' }}>{this.state.regexPattern}.exec('Input String')</h3></div> : ''}
                   {this.state.isMatchChecked ? <div><h3 style={{ color: 'grey' }}>'Input String'.match({this.state.regexPattern})</h3></div> : ''}
                   {this.state.isReplaceChecked ? <div><h3 style={{ color: 'grey' }}>'Input String'.replace({this.state.regexPattern})</h3></div> : ''}
                   {this.state.isSearchChecked ? <div><h3 style={{ color: 'grey' }}>'Input String'.search({this.state.regexPattern})</h3></div> : ''}
                 </div>
                 : ''
               } */
              }
            </Row>
            <br></br>
            <Row style={{ alignItems: 'center' }}>
              <Col lg="11" sm="6">
                <TextField
                  style={{ width: '1000px' }}
                  id="outlined-textarea"
                  label="Test the regex here with keywords"
                  placeholder="Type Here..."
                  multiline
                  rows={8}
                  variant="outlined"
                  onChange={this.handleTestingKeywords}
                />
              </Col>
              <Col lg="1" sm="2">
                <Button onClick={this.testKeywords} className="btn-round" type="button" disabled={this.state.testingKeywords && this.state.testingKeywords.length ? false : true} style={{ margin: 0, backgroundColor: this.state.testingKeywords && this.state.testingKeywords.length ? '#2ca8ff' : '#808080' }}>
                  Check
              </Button>
              </Col>
            </Row>
            <br></br>
            <Row className="text-center mt-5">
              <Col className="ml-auto mr-auto" md="12">
                {testResult[0].keyword && testResult.map((row, index) => (
                  // <li key ={index}>
                  <div key={index} style={{ padding: '10px' }}>
                    <Chip label={row.keyword} />
                    <br></br>
                    {(row.result === false || row.result === 'null') ? <Chip label={row.result === false ? 'false' : row.result} color="secondary" /> :
                      <Chip label={row.result === true ? 'true' : row.result} color="primary" />}

                    { /*<h3 style={{ color: 'grey' }}>KeyWord: <strong>{row.keyword}</strong></h3>
                    <h3 style={{ color: (row.result === false || row.result === 'null') ? 'red' : 'green' }}>Test Value: <strong>{row.result === false ? 'false' : (row.result === true ? 'true' : row.result)}</strong></h3>
                */}
                  </div>
                  // </li>
                ))}
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/*<Row>
              <Button onClick={this.getLikesCount} className="btn-round" type="button" style={{ margin: 0, width: '80px', backgroundColor: '#2ca8ff' }}>
                Get Likes count
        </Button>
              {this.state.likesCount ? <p>{this.state.likesCount}</p> : ''}
            </Row>
            <Row>
              <Button onClick={this.postLiked} className="btn-round" type="button" style={{ margin: 0, width: '80px', backgroundColor: '#2ca8ff' }}>
                Like
        </Button>
              {this.state.liked === "true" ? <p>liked succesfully</p> : ''}

            </Row>
            */}
          </Container>
        </div>
      </>
    )
  }
}

export default GetStarted;

import './App.css';

function App() {
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n}\n\n.header {\n  text-align: center;\n  padding: 32px;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n  max-width: 25%;\n  padding: 0 4px;;\n}\n\n.column img {\n  margin-top: 8px;\n  vertical-align: middle;\n  width: 100%;\n}\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n  .column {\n    -ms-flex: 50%;\n    flex: 50%;\n    max-width: 50%;\n    position: relative;\n  text-align: center;\n  }\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    -ms-flex: 100%;\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n"
    }}
  />
  {/* Header */}
  <div className="header">
    <h1>Carpoolers</h1>
  </div>
	  {/* Photo Grid */}
  <div className="row">
	  <div className="column">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />

	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  	          
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  
	  </a>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
    </div>
	  <div className="column">
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
    </div>
	  <div className="column">
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
    </div>
	  <div className="column">
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU" />
	  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfHwpUb_cXDQgW1YH6CKg_KqtnOJj9trUhEqkLS-gKeRZPo0BWOl2CQTkvChQzfpa3M&usqp=CAU'} />
	  </a>
    </div>

	  </div>

</>

  );
}

export default App;

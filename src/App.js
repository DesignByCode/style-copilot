import React from 'react'
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<>
			<NavBar/>


			<div className="wrapper">
				<div className="row">
					<div className="md-col-12">
						<h1>Hello world</h1>
					</div>
					<div className="md-col-4">
						<div className="panel">
							<h3>Lorem ipsum dolor.</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti minus necessitatibus nobis quia ullam?
								Expedita iusto laudantium totam voluptas. Consectetur.</p>
							<button className="btn btn--blush-900">Button</button>
						</div>
					</div>
					<div className="md-col-4">
						<div className="panel">
							<h3 className="txt--blue-100">Dignissimos, facilis, sapiente.</h3>
							<p  className="txt--blue-300">Error ipsum laborum maiores veniam. Illum incidunt qui temporibus voluptatem voluptates? Consequuntur cum
								cumque molestias neque nostrum provident quae sequi!</p>
							<button className="btn">Button</button>
							<a href="#" className="btn">Button</a>
						</div>
					</div>
					<div className="md-col-4">
						<div className="panel">
							<h3>Necessitatibus, officia, repudiandae.</h3>
							<p>Est laborum quos voluptate. Ab amet asperiores atque, beatae, enim expedita, fugiat impedit incidunt
								magni maxime repellat temporibus vel vitae!</p>
							<button className="btn">Button</button>
							<button className="btn btn--blue-500">Button</button>
						</div>
					</div>
					<div className="md-col-4 md-offset-2">
						<div className="panel">
							<h3>Necessitatibus, officia, repudiandae.</h3>
							<p>Est laborum quos voluptate. Ab amet asperiores atque, beatae, enim expedita, fugiat impedit incidunt
								magni maxime repellat temporibus vel vitae!</p>
							<button className="btn">Button</button>
							<button className="btn btn--blue-700">Button</button>
						</div>
					</div>
					<div className="md-col-4 md-offset-0">
						<div className="panel">
							<h3>Necessitatibus, officia, repudiandae.</h3>
							<p>Est laborum quos voluptate. Ab amet asperiores atque, beatae, enim expedita, fugiat impedit incidunt
								magni maxime repellat temporibus vel vitae!</p>
							<button className="btn">Button</button>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}

export default App

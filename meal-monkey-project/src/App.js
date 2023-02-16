import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));

/*
Header
  Logo
  Nav items
  Cart
Body
  Search bar
  Resaurant list
    Restaurant card
      Image
      Name
      Rating
      Cuisine
Footer
  Social links
  Copyright
*/

const AppLayout = () => {
	const [user, setUser] = useState({
		name: "New User",
		email: "newuser@gmail.com",
	});

	return (
		<Provider store={store}>
			<UserContext.Provider
				value={{
					user: user,
					setUser,
				}}
			>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
				children: [
					{
						path: "profile",
						element: <Profile />,
					},
				],
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantDetails />,
			},
			{
				path: "/instamart",
				element: (
					<Suspense fallback={<h2>Please wait...</h2>}>
						<Instamart />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

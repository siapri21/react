


// La nivagation est virtuel
function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>Footer</footer>
      </BrowserRouter>
    </div>
  );
}

// export default Navigation;
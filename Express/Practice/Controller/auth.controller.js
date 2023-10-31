
export const signup = async (req, res) => {
    try {
  
      res.status(200).json({ msg: "Signup API Called" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving user in database. Try later' });
    }
  };
  
  export const login = async (req, res) => {
    try {
  
      res.status(200).json({ msg: "Login API Called" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving user in database. Try later' });
    }
  };
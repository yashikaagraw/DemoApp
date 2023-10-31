 
export const gettotalcustomers = async (req, res) => {
    try {
  
      res.status(200).json({ msg: "count = 25" });
    
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving user in database. Try later' });
    }
  };
  
  
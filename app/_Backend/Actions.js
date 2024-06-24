import supabase from "./supabase";

export async function insertUserData(email,name, image, TotalWorkouts, TotalCalories) {
    try {
      const { data, error } = await supabase
        .from('Table1')
        .insert([
          { email,name, image, TotalWorkouts, TotalCalories },
        ])
        .select()
  
      if (error) {
        throw error
      }
  
      //console.log('Inserted data:', data)
      return data
    } catch (error) {
      console.error('Error inserting data:', error)
      return null
    }
  }

  export async function checkUserExists(email) {
    try {
      const { data, error } = await supabase
        .from('Table1')
        .select('email')
        .eq('email', email)
  
      if (error) {
        throw error
      }
  
      if (data.length > 0) {
        //console.log('User exists:', data[0])
        return true
      } else {
        console.log('User does not exist')
        return false
      }
    } catch (error) {
      console.error('Error checking user existence:', error)
      return false
    }
  }

  export async function getTotalRows() {
    try {
      const { count, error } = await supabase
        .from('Table1')
        .select('email', { count: 'exact', head: true })
  
      if (error) {
        throw error
      }
  
      //console.log('Total rows:', count)
      return count
    } catch (error) {
      console.error('Error getting total rows:', error)
      return null
    }
  }

  export async function getUserDataByEmail(email) {
    try {
      const { data, error } = await supabase
        .from('Table1')
        .select('*')
        .eq('email', email)
        .single() // Ensure a single object is returned
  
      if (error) {
        throw error
      }
  
      //console.log('User data:', data)
      return data
    } catch (error) {
      console.error('Error getting user data:', error)
      return null
    }
  }
package main
 
import (
    "fmt"
    "log"
    "net/http"
	)
func hello(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
	
	//Serve pages
    case "GET":     
		fmt.Println("Received GET")
		if r.URL.Path == "/" {
			http.ServeFile(w, r, "index.html")
			return
			}
		fmt.Println(r.URL.Path)
		http.Error(w, "404 file not found.", http.StatusNotFound)
		return
		
	//intercept POST
    case "POST":
		fmt.Println("Received POST");
        // Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
        if err := r.ParseForm(); err != nil {
            fmt.Fprintf(w, "ParseForm() err: %v", err)
            return
        }
        fmt.Fprintf(w, "Post from website! r.PostFrom = %v\n", r.PostForm)
        name := r.FormValue("name")
        address := r.FormValue("address")
        fmt.Fprintf(w, "Name = %s\n", name)
        fmt.Fprintf(w, "Address = %s\n", address)
    default:
        fmt.Fprintf(w, "Sorry, only GET and POST methods are supported.")
    }
}
 
func main() {
    http.HandleFunc("/", hello)
 
    fmt.Printf("Starting server for testing HTTP POST...\n")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
		}
}
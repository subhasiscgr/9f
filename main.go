/*<9f: generic source code for web blog.>
Copyright (C) 2018  Subhasis Banerjee

               This program is free software: you can redistribute it and/or modify
                                                                          it under the terms of the GNU General Public License as published by
                                                                          the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

                 This program is distributed in the hope that it will be useful,
                 but WITHOUT ANY WARRANTY; without even the implied warranty of
                                           MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                           GNU General Public License for more details.

                                           You should have received a copy of the GNU General Public License
                                           along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
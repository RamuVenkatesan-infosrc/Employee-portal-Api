function filterTable()
 {
    const input  = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table  = document.getElementById("studentTable");
    const tr     = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[0]; 
        if (td) 
        {
            const textValue = td.textContent || td.innerText;
            tr[i].style.display = textValue.toLowerCase().includes(filter) ? "" : "none";
        }
    }
}

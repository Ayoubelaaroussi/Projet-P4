
//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------


namespace MyEcommerceAPP.Models
{

using System;
    using System.Collections.Generic;
    
public partial class Client
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public Client()
    {

        this.Piece = new HashSet<Piece>();

    }


    public int ID { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public string Nom { get; set; }

    public string Prenom { get; set; }

    public string AdressFacturation { get; set; }

    public Nullable<System.DateTime> DateCreation { get; set; }

    public string AdressBonLivraison { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<Piece> Piece { get; set; }

}

}

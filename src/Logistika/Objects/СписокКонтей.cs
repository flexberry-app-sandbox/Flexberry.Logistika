﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Logistika
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Список контей.
    /// </summary>
    // *** Start programmer edit section *** (СписокКонтей CustomAttributes)

    // *** End programmer edit section *** (СписокКонтей CustomAttributes)
    [AutoAltered()]
    [Caption("Список контей")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СписокКонтейE", new string[] {
            "НомерКонт as \'Номер конт\'",
            "НаимКонт as \'Наим конт\'"})]
    [View("СписокКонтейL", new string[] {
            "НомерКонт as \'Номер конт\'",
            "НаимКонт as \'Наим конт\'"})]
    public class СписокКонтей : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКонт;
        
        private string fНаимКонт;
        
        // *** Start programmer edit section *** (СписокКонтей CustomMembers)

        // *** End programmer edit section *** (СписокКонтей CustomMembers)

        
        /// <summary>
        /// НаимКонт.
        /// </summary>
        // *** Start programmer edit section *** (СписокКонтей.НаимКонт CustomAttributes)

        // *** End programmer edit section *** (СписокКонтей.НаимКонт CustomAttributes)
        [StrLen(255)]
        public virtual string НаимКонт
        {
            get
            {
                // *** Start programmer edit section *** (СписокКонтей.НаимКонт Get start)

                // *** End programmer edit section *** (СписокКонтей.НаимКонт Get start)
                string result = this.fНаимКонт;
                // *** Start programmer edit section *** (СписокКонтей.НаимКонт Get end)

                // *** End programmer edit section *** (СписокКонтей.НаимКонт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокКонтей.НаимКонт Set start)

                // *** End programmer edit section *** (СписокКонтей.НаимКонт Set start)
                this.fНаимКонт = value;
                // *** Start programmer edit section *** (СписокКонтей.НаимКонт Set end)

                // *** End programmer edit section *** (СписокКонтей.НаимКонт Set end)
            }
        }
        
        /// <summary>
        /// НомерКонт.
        /// </summary>
        // *** Start programmer edit section *** (СписокКонтей.НомерКонт CustomAttributes)

        // *** End programmer edit section *** (СписокКонтей.НомерКонт CustomAttributes)
        public virtual int НомерКонт
        {
            get
            {
                // *** Start programmer edit section *** (СписокКонтей.НомерКонт Get start)

                // *** End programmer edit section *** (СписокКонтей.НомерКонт Get start)
                int result = this.fНомерКонт;
                // *** Start programmer edit section *** (СписокКонтей.НомерКонт Get end)

                // *** End programmer edit section *** (СписокКонтей.НомерКонт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СписокКонтей.НомерКонт Set start)

                // *** End programmer edit section *** (СписокКонтей.НомерКонт Set start)
                this.fНомерКонт = value;
                // *** Start programmer edit section *** (СписокКонтей.НомерКонт Set end)

                // *** End programmer edit section *** (СписокКонтей.НомерКонт Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СписокКонтейE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокКонтейE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокКонтейE", typeof(IIS.Logistika.СписокКонтей));
                }
            }
            
            /// <summary>
            /// "СписокКонтейL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СписокКонтейL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СписокКонтейL", typeof(IIS.Logistika.СписокКонтей));
                }
            }
        }
    }
}

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
    /// Формир распред.
    /// </summary>
    // *** Start programmer edit section *** (ФормирРаспред CustomAttributes)

    // *** End programmer edit section *** (ФормирРаспред CustomAttributes)
    [AutoAltered()]
    [Caption("Формир распред")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормирРаспредE", new string[] {
            "НомерДокРаспр as \'Номер док распр\'",
            "Дата as \'Дата\'",
            "ДокумПостав as \'Докум постав\'",
            "ДокумПостав.Дата as \'Дата\'",
            "ПунктПогрузки as \'Пункт погрузки\'",
            "ПунктПогрузки.Наименование as \'Наименование\'",
            "СписокБарж as \'Список барж\'",
            "СписокБарж.Производитель as \'Производитель\'",
            "СписокКонтей as \'Список контей\'",
            "СписокКонтей.НаимКонт as \'Наим конт\'",
            "ДокумПостав.Клиенты.АдресПостав as \'Адрес Поставки\'",
            "ДокумПостав.Клиенты.НаимЗаказ as \'Наименование заказа\'",
            "ДокумПостав.Клиенты.Телефон as \'Телефон\'"}, Hidden=new string[] {
            "ДокумПостав.Дата",
            "ПунктПогрузки.Наименование",
            "СписокБарж.Производитель",
            "СписокКонтей.НаимКонт"})]
    [MasterViewDefineAttribute("ФормирРаспредE", "ДокумПостав", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Дата")]
    [MasterViewDefineAttribute("ФормирРаспредE", "ПунктПогрузки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ФормирРаспредE", "СписокБарж", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Производитель")]
    [MasterViewDefineAttribute("ФормирРаспредE", "СписокКонтей", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимКонт")]
    [View("ФормирРаспредL", new string[] {
            "НомерДокРаспр as \'Номер док распр\'",
            "Дата as \'Дата\'",
            "ДокумПостав.Дата as \'Дата\'",
            "ПунктПогрузки.Наименование as \'Наименование\'",
            "СписокБарж.Производитель as \'Производитель\'",
            "СписокКонтей.НаимКонт as \'Наим конт\'",
            "ДокумПостав.Клиенты.АдресПостав as \'Адрес поставки\'",
            "ДокумПостав.Клиенты.Телефон as \'Телефон\'",
            "ДокумПостав.Клиенты.НаимЗаказ as \'Наименование заказ\'"})]
    public class ФормирРаспред : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерДокРаспр;
        
        private System.DateTime fДата;
        
        private IIS.Logistika.ДокумПостав fДокумПостав;
        
        private IIS.Logistika.ПунктПогрузки fПунктПогрузки;
        
        private IIS.Logistika.СписокБарж fСписокБарж;
        
        private IIS.Logistika.СписокКонтей fСписокКонтей;
        
        // *** Start programmer edit section *** (ФормирРаспред CustomMembers)

        // *** End programmer edit section *** (ФормирРаспред CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.Дата Get start)

                // *** End programmer edit section *** (ФормирРаспред.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормирРаспред.Дата Get end)

                // *** End programmer edit section *** (ФормирРаспред.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.Дата Set start)

                // *** End programmer edit section *** (ФормирРаспред.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормирРаспред.Дата Set end)

                // *** End programmer edit section *** (ФормирРаспред.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерДокРаспр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр CustomAttributes)
        public virtual int НомерДокРаспр
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Get start)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Get start)
                int result = this.fНомерДокРаспр;
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Get end)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Set start)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Set start)
                this.fНомерДокРаспр = value;
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Set end)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.ДокумПостав CustomAttributes)
        [PropertyStorage(new string[] {
                "ДокумПостав"})]
        [NotNull()]
        public virtual IIS.Logistika.ДокумПостав ДокумПостав
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Get start)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Get start)
                IIS.Logistika.ДокумПостав result = this.fДокумПостав;
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Get end)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Set start)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Set start)
                this.fДокумПостав = value;
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Set end)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки CustomAttributes)
        [PropertyStorage(new string[] {
                "ПунктПогрузки"})]
        [NotNull()]
        public virtual IIS.Logistika.ПунктПогрузки ПунктПогрузки
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Get start)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Get start)
                IIS.Logistika.ПунктПогрузки result = this.fПунктПогрузки;
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Get end)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Set start)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Set start)
                this.fПунктПогрузки = value;
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Set end)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.СписокБарж CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.СписокБарж CustomAttributes)
        [PropertyStorage(new string[] {
                "СписокБарж"})]
        [NotNull()]
        public virtual IIS.Logistika.СписокБарж СписокБарж
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Get start)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Get start)
                IIS.Logistika.СписокБарж result = this.fСписокБарж;
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Get end)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Set start)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Set start)
                this.fСписокБарж = value;
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Set end)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.СписокКонтей CustomAttributes)
        [PropertyStorage(new string[] {
                "СписокКонтей"})]
        [NotNull()]
        public virtual IIS.Logistika.СписокКонтей СписокКонтей
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Get start)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Get start)
                IIS.Logistika.СписокКонтей result = this.fСписокКонтей;
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Get end)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Set start)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Set start)
                this.fСписокКонтей = value;
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Set end)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормирРаспредE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирРаспредE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирРаспредE", typeof(IIS.Logistika.ФормирРаспред));
                }
            }
            
            /// <summary>
            /// "ФормирРаспредL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирРаспредL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирРаспредL", typeof(IIS.Logistika.ФормирРаспред));
                }
            }
        }
    }
}
